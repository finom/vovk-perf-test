import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iwv")
export default class IwvController {
  @operation({
    summary: "Get Iwv",
  })
  @get()
  static getIwv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Iwv",
  })
  @post("{id}")
  static createIwv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
