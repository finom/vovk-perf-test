import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("exs")
export default class ExsController {
  @operation({
    summary: "Get Exs",
  })
  @get()
  static getExs = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Exs",
  })
  @post("{id}")
  static createExs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
