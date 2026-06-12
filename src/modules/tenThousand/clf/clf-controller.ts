import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("clf")
export default class ClfController {
  @operation({
    summary: "Get Clf",
  })
  @get()
  static getClf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Clf",
  })
  @post("{id}")
  static createClf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
