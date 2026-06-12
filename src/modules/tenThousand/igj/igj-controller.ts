import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("igj")
export default class IgjController {
  @operation({
    summary: "Get Igj",
  })
  @get()
  static getIgj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Igj",
  })
  @post("{id}")
  static createIgj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
