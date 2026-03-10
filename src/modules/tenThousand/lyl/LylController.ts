import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lyl")
export default class LylController {
  @operation({
    summary: "Get Lyl",
  })
  @get()
  static getLyl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lyl",
  })
  @post("{id}")
  static createLyl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
