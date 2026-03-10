import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dak")
export default class DakController {
  @operation({
    summary: "Get Dak",
  })
  @get()
  static getDak = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dak",
  })
  @post("{id}")
  static createDak = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
