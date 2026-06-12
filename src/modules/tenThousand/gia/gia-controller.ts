import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gia")
export default class GiaController {
  @operation({
    summary: "Get Gia",
  })
  @get()
  static getGia = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gia",
  })
  @post("{id}")
  static createGia = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
