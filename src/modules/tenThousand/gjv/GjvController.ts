import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gjv")
export default class GjvController {
  @operation({
    summary: "Get Gjv",
  })
  @get()
  static getGjv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gjv",
  })
  @post("{id}")
  static createGjv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
