import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iyx")
export default class IyxController {
  @operation({
    summary: "Get Iyx",
  })
  @get()
  static getIyx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iyx",
  })
  @post("{id}")
  static createIyx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
