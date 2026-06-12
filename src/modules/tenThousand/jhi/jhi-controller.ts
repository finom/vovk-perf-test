import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jhi")
export default class JhiController {
  @operation({
    summary: "Get Jhi",
  })
  @get()
  static getJhi = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jhi",
  })
  @post("{id}")
  static createJhi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
