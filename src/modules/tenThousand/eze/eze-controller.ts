import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eze")
export default class EzeController {
  @operation({
    summary: "Get Eze",
  })
  @get()
  static getEze = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Eze",
  })
  @post("{id}")
  static createEze = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
