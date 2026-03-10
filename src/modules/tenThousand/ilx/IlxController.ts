import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ilx")
export default class IlxController {
  @operation({
    summary: "Get Ilx",
  })
  @get()
  static getIlx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ilx",
  })
  @post("{id}")
  static createIlx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
