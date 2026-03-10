import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dwn")
export default class DwnController {
  @operation({
    summary: "Get Dwn",
  })
  @get()
  static getDwn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dwn",
  })
  @post("{id}")
  static createDwn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
