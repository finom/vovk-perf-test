import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gyu")
export default class GyuController {
  @operation({
    summary: "Get Gyu",
  })
  @get()
  static getGyu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gyu",
  })
  @post("{id}")
  static createGyu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
