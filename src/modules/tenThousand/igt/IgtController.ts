import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("igt")
export default class IgtController {
  @operation({
    summary: "Get Igt",
  })
  @get()
  static getIgt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Igt",
  })
  @post("{id}")
  static createIgt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
