import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iuv")
export default class IuvController {
  @operation({
    summary: "Get Iuv",
  })
  @get()
  static getIuv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Iuv",
  })
  @post("{id}")
  static createIuv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
