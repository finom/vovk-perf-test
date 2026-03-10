import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ebu")
export default class EbuController {
  @operation({
    summary: "Get Ebu",
  })
  @get()
  static getEbu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ebu",
  })
  @post("{id}")
  static createEbu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
