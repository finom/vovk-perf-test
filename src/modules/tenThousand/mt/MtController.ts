import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mt")
export default class MtController {
  @operation({
    summary: "Get Mt",
  })
  @get()
  static getMt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mt",
  })
  @post("{id}")
  static createMt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
