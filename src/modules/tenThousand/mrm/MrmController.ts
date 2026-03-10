import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mrm")
export default class MrmController {
  @operation({
    summary: "Get Mrm",
  })
  @get()
  static getMrm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mrm",
  })
  @post("{id}")
  static createMrm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
