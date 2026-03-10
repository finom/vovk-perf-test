import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dnd")
export default class DndController {
  @operation({
    summary: "Get Dnd",
  })
  @get()
  static getDnd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dnd",
  })
  @post("{id}")
  static createDnd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
