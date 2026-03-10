import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("img")
export default class ImgController {
  @operation({
    summary: "Get Img",
  })
  @get()
  static getImg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Img",
  })
  @post("{id}")
  static createImg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
