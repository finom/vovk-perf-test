import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("exd")
export default class ExdController {
  @operation({
    summary: "Get Exd",
  })
  @get()
  static getExd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Exd",
  })
  @post("{id}")
  static createExd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
