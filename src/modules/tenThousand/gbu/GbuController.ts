import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gbu")
export default class GbuController {
  @operation({
    summary: "Get Gbu",
  })
  @get()
  static getGbu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gbu",
  })
  @post("{id}")
  static createGbu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
