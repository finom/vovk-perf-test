import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("oy")
export default class OyController {
  @operation({
    summary: "Get Oy",
  })
  @get()
  static getOy = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Oy",
  })
  @post("{id}")
  static createOy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
