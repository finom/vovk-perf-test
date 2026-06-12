import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aru")
export default class AruController {
  @operation({
    summary: "Get Aru",
  })
  @get()
  static getAru = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Aru",
  })
  @post("{id}")
  static createAru = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
