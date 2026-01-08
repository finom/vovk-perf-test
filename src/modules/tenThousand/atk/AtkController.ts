import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("atk")
export default class AtkController {
  @operation({
    summary: "Get Atk",
  })
  @get()
  static getAtk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Atk",
  })
  @post("{id}")
  static createAtk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
