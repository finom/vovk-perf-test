import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("duu")
export default class DuuController {
  @operation({
    summary: "Get Duu",
  })
  @get()
  static getDuu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Duu",
  })
  @post("{id}")
  static createDuu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
