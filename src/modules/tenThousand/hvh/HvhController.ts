import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hvh")
export default class HvhController {
  @operation({
    summary: "Get Hvh",
  })
  @get()
  static getHvh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hvh",
  })
  @post("{id}")
  static createHvh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
