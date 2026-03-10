import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gfl")
export default class GflController {
  @operation({
    summary: "Get Gfl",
  })
  @get()
  static getGfl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gfl",
  })
  @post("{id}")
  static createGfl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
