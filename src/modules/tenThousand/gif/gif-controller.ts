import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gif")
export default class GifController {
  @operation({
    summary: "Get Gif",
  })
  @get()
  static getGif = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gif",
  })
  @post("{id}")
  static createGif = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
