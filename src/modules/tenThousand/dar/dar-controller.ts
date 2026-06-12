import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dar")
export default class DarController {
  @operation({
    summary: "Get Dar",
  })
  @get()
  static getDar = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dar",
  })
  @post("{id}")
  static createDar = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
