import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dds")
export default class DdsController {
  @operation({
    summary: "Get Dds",
  })
  @get()
  static getDds = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dds",
  })
  @post("{id}")
  static createDds = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
