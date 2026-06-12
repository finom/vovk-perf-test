import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("clo")
export default class CloController {
  @operation({
    summary: "Get Clo",
  })
  @get()
  static getClo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Clo",
  })
  @post("{id}")
  static createClo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
