import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ftn")
export default class FtnController {
  @operation({
    summary: "Get Ftn",
  })
  @get()
  static getFtn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ftn",
  })
  @post("{id}")
  static createFtn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
