import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gu")
export default class GuController {
  @operation({
    summary: "Get Gu",
  })
  @get()
  static getGu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gu",
  })
  @post("{id}")
  static createGu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
