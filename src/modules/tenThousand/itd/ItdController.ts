import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("itd")
export default class ItdController {
  @operation({
    summary: "Get Itd",
  })
  @get()
  static getItd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Itd",
  })
  @post("{id}")
  static createItd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
