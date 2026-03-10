import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dhn")
export default class DhnController {
  @operation({
    summary: "Get Dhn",
  })
  @get()
  static getDhn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dhn",
  })
  @post("{id}")
  static createDhn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
