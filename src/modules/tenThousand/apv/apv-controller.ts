import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("apv")
export default class ApvController {
  @operation({
    summary: "Get Apv",
  })
  @get()
  static getApv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Apv",
  })
  @post("{id}")
  static createApv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
