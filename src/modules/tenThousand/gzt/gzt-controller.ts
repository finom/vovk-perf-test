import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gzt")
export default class GztController {
  @operation({
    summary: "Get Gzt",
  })
  @get()
  static getGzt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gzt",
  })
  @post("{id}")
  static createGzt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
