import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("du")
export default class DuController {
  @operation({
    summary: "Get Du",
  })
  @get()
  static getDu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Du",
  })
  @post("{id}")
  static createDu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
