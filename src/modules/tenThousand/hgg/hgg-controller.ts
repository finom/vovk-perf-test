import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hgg")
export default class HggController {
  @operation({
    summary: "Get Hgg",
  })
  @get()
  static getHgg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hgg",
  })
  @post("{id}")
  static createHgg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
