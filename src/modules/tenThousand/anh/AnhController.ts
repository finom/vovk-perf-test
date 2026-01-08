import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("anh")
export default class AnhController {
  @operation({
    summary: "Get Anh",
  })
  @get()
  static getAnh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Anh",
  })
  @post("{id}")
  static createAnh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
