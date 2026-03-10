import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("e")
export default class EController {
  @operation({
    summary: "Get E",
  })
  @get()
  static getE = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create E",
  })
  @post("{id}")
  static createE = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
