import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gyo")
export default class GyoController {
  @operation({
    summary: "Get Gyo",
  })
  @get()
  static getGyo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gyo",
  })
  @post("{id}")
  static createGyo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
