import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("blp")
export default class BlpController {
  @operation({
    summary: "Get Blp",
  })
  @get()
  static getBlp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Blp",
  })
  @post("{id}")
  static createBlp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
