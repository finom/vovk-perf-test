import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lhx")
export default class LhxController {
  @operation({
    summary: "Get Lhx",
  })
  @get()
  static getLhx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lhx",
  })
  @post("{id}")
  static createLhx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
