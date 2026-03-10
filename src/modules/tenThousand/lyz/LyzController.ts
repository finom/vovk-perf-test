import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lyz")
export default class LyzController {
  @operation({
    summary: "Get Lyz",
  })
  @get()
  static getLyz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lyz",
  })
  @post("{id}")
  static createLyz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
