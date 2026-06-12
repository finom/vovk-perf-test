import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lcj")
export default class LcjController {
  @operation({
    summary: "Get Lcj",
  })
  @get()
  static getLcj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lcj",
  })
  @post("{id}")
  static createLcj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
