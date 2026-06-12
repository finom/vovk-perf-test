import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("agd")
export default class AgdController {
  @operation({
    summary: "Get Agd",
  })
  @get()
  static getAgd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Agd",
  })
  @post("{id}")
  static createAgd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
