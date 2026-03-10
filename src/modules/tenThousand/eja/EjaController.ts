import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eja")
export default class EjaController {
  @operation({
    summary: "Get Eja",
  })
  @get()
  static getEja = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Eja",
  })
  @post("{id}")
  static createEja = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
