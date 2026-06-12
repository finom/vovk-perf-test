import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("blj")
export default class BljController {
  @operation({
    summary: "Get Blj",
  })
  @get()
  static getBlj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Blj",
  })
  @post("{id}")
  static createBlj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
