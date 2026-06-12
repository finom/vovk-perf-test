import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mzk")
export default class MzkController {
  @operation({
    summary: "Get Mzk",
  })
  @get()
  static getMzk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mzk",
  })
  @post("{id}")
  static createMzk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
