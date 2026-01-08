import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("day")
export default class DayController {
  @operation({
    summary: "Get Day",
  })
  @get()
  static getDay = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Day",
  })
  @post("{id}")
  static createDay = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
