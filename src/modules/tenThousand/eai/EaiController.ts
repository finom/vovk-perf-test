import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eai")
export default class EaiController {
  @operation({
    summary: "Get Eai",
  })
  @get()
  static getEai = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Eai",
  })
  @post("{id}")
  static createEai = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
