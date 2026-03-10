import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bdz")
export default class BdzController {
  @operation({
    summary: "Get Bdz",
  })
  @get()
  static getBdz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bdz",
  })
  @post("{id}")
  static createBdz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
