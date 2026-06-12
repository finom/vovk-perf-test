import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jpg")
export default class JpgController {
  @operation({
    summary: "Get Jpg",
  })
  @get()
  static getJpg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jpg",
  })
  @post("{id}")
  static createJpg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
